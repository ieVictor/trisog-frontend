import InputContainer from "../athoms/InputContainer";
import SearchInput from "../athoms/SearchInput";

type SearchFormProps = {
  onSubmit: (value: string) => void
}

export default function SearchForm(props: SearchFormProps) {
  return (
    <InputContainer>
      <h6>Search</h6>
      <SearchInput placeholder="Type anything..." onSubmit={props.onSubmit}/>
    </InputContainer>
  )
} 