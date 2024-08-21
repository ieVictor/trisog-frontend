import CenteredTitle from "../../../components/CenteredTitle";
import ArticleCard from "./athoms/Article";

export default function SeventhSection() {
  return (
    <section className="flex flex-col justify-center px-44 py-20 gap-16 bg-white">
      <CenteredTitle subtitle="Updates" title="Latest Travel Guide"/>
      <div className="w-full gap-y-10 gap-x-40 flex flex-wrap">
        <ArticleCard date="July 13, 2023" author="Admin">
          The Impact of Covid-19 on travel & tourism industry
        </ArticleCard>
        <ArticleCard date="July 13, 2023" author="Admin">
          The Impact of Covid-19 on travel & tourism industry
        </ArticleCard>
        <ArticleCard date="July 13, 2023" author="Admin">
          The Impact of Covid-19 on travel & tourism industry
        </ArticleCard>
        <ArticleCard date="July 13, 2023" author="Admin">
          The Impact of Covid-19 on travel & tourism industry
        </ArticleCard>
      </div>
    </section>
  )
}