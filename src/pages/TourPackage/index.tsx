import Search from '../../components/Search';
import Footer from '../../components/Footer';
import TourCard from '../../components/TourCard';
import CheckListGroup from './athoms/CheckListGroup';
import CheckBoxList from './components/CheckBoxList';
import SearchForm from './components/SearchForm';
import SearchStats from './components/SearchStats';
import SliderForm from './components/SliderForm';
import { Checkbox, Pagination } from '@nextui-org/react';
import { initialState, useTourPackage } from './hooks/useTourPackage';
import DESTINATIONS from '../../models/Destinations';
import { useEffect, useMemo, useState } from 'react';
import { useCategories } from '../../hooks/categoriesHooks';
import { useSearchParams } from 'react-router-dom';

const CHECKBOX_STYLE = {
  label: 'text-action',
  wrapper: 'rounded-none before:rounded before:border before:border-gray-400',
  base: 'p-2 h-fit',
};

export default function TourPackage() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const guestsParam = searchParams.get('guests');

  const locationState = useMemo(() => ({
    destination: searchParams.get('destination'),
    type: typeParam ? new Set(typeParam.split(',').map(Number)) : new Set<number>(),
    guests: guestsParam ? parseInt(guestsParam, 10) : null,
    date: searchParams.get('date'),
  }), [searchParams, typeParam, guestsParam]);

  const { state, dispatch } = useTourPackage({...locationState, ...initialState});
  const { categories } = useCategories();
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  useEffect(() => {
    dispatch({ type: 'SET_SEARCH', payload: locationState.destination || '' });
    dispatch({ type: 'SET_CAT_FILTER', payload: Array.from(locationState.type).map(Number) });
    dispatch({ type: 'SET_DATE', payload: locationState.date || null });
    dispatch({ type: 'SET_GUESTS', payload: locationState.guests || null });
  }, [locationState, dispatch]);

  const handleCheckBoxChange = (rating: number) => {
    let updatedRatings;

    if (selectedRatings.includes(rating))
      updatedRatings = selectedRatings.filter((r: number) => r !== rating);
    else updatedRatings = [...selectedRatings, rating];

    setSelectedRatings(updatedRatings);
    dispatch({
      type: 'SET_RATING_FILTER',
      payload: updatedRatings.length > 0 ? Math.max(...updatedRatings) : 0,
    });
  };

  return (
    <>
      <main className="w-full h-full bg-white">
        <section
          className={
            'w-full h-72 bg-tourpackage-first-section bg-cover bg-center ' +
            'flex flex-col text-center justify-center g-16 relative text-white'
          }
        >
          <h1 className="font-bold font-display text-5xl">Tour Package</h1>
          <span className="font-normal text-base font-display">
            Home /<strong className="text-rose-400"> Tour Package</strong>
          </span>
          <Search />
        </section>

        <section className="flex flex-row w-full h-full gap-8 p-28">
          <aside className="max-w-[271px] flex flex-col gap-8">
            <SearchForm onSubmit={(value) => dispatch({
              type: 'SET_SEARCH',
              payload: value
            })}/>
            <SliderForm
              onSubmit={(value) =>
                dispatch({ type: 'SET_SLIDER_VALUE', payload: value })
              }
            />

            <CheckBoxList title="Categories">
              {categories &&
                categories.map((category) => (
                  <Checkbox
                    key={category.id}
                    color="danger"
                    radius="sm"
                    size="sm"
                    onValueChange={() =>
                      dispatch({
                        type: 'SET_CAT_FILTER',
                        payload: state.catFilter.includes(category.id)
                          ? state.catFilter.filter((id) => id !== category.id)
                          : [...state.catFilter, category.id],
                      })
                    }
                    classNames={CHECKBOX_STYLE}
                    isSelected={state.catFilter.includes(category.id)}
                    className="text-gray-600"
                  >
                    {category.name}
                  </Checkbox>
                ))}
            </CheckBoxList>
            <CheckBoxList title="Destination">
              {DESTINATIONS.map((destination) => (
                <CheckListGroup
                  title={destination.continent}
                  key={destination.continent}
                >
                  {destination.country.map((item) => (
                    <Checkbox
                      key={item}
                      color="danger"
                      radius="sm"
                      onValueChange={() =>
                        dispatch({
                          type: 'SET_COUNTRY_FILTER',
                          payload: state.countryFilter.includes(item)
                            ? state.countryFilter.filter(
                                (country) => country !== item
                              )
                            : [...state.countryFilter, item],
                        })
                      }
                      classNames={CHECKBOX_STYLE}
                      className="text-gray-600"
                    >
                      {item}
                    </Checkbox>
                  ))}
                </CheckListGroup>
              ))}
            </CheckBoxList>

            <CheckBoxList title="Reviews">
              {[...Array(5)].map((_, index) => (
                <Checkbox
                  key={index - 1 + 'rating'}
                  value={String(5 - index)}
                  color="danger"
                  radius="sm"
                  classNames={CHECKBOX_STYLE}
                  isSelected={selectedRatings.includes(5 - index)}
                  onValueChange={() => handleCheckBoxChange(5 - index)}
                >
                  {5 - index + (5 - index === 5 ? ' Stars' : ' Stars & Up')}
                </Checkbox>
              ))}
            </CheckBoxList>
          </aside>
          <div className="flex flex-col w-full gap-6">
            {state.tourData && (
              <>
                <SearchStats
                  counter={state.tourData.total_tours}
                  onSortChange={(sortOption) =>
                    dispatch({
                      type: 'SET_SORT_OPTION',
                      payload: sortOption as Set<string>,
                    })
                  }
                  onSortDirectionChange={(direction) =>
                    dispatch({ type: 'SET_DIRECTION', payload: direction })
                  }
                />
                <div className="grid grid-cols-3 w-full h-fit gap-8 ">
                  {state.tourData.tours.map((tour) => (
                    <TourCard data={tour} url={tour.id} key={tour.id} fill />
                  ))}
                </div>
              </>
            )}
            {state.tourData && state.tourData.total_pages > 1 && (
              <Pagination
                total={state.tourData.total_pages}
                initialPage={1}
                showControls
                className="self-center"
                radius="full"
                color="danger"
                onChange={(value) =>
                  dispatch({ type: 'SET_PAGE', payload: value })
                }
                classNames={{
                  item: 'border border-gray-200 bg-white',
                  prev: 'border border-gray-200 bg-white',
                  next: 'border border-gray-200 bg-white',
                }}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
