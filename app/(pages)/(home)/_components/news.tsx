import Image from "next/image";

export default function HomeNews() {
  return (
    <section className="mt-[3rem] px-[8rem]">
      <div className="section-title font-bold text-4xl text-center">Tin Tức và Tuyển dụng</div>
      <p className="font-normal text-center text-2xl leading-[180%]">See the developments that have occurred to TARA in the world</p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="p-6 xl:row-span-3 xl:flex xl:flex-col xl:items-center">
          <Image src="/assets/news-1.png" alt="news-images" width={500} height={100} />
          <span className="tags my-2 w-[500px]">News</span>
          <div className="font-medium text-2xl my-2 w-[500px]">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</div>
          <div className="my-2 w-[500px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
          <div className="my-2 w-[500px] hidden xl:block">
            <a href="#" className="underline">
              Read more
            </a>
          </div>
        </div>

        <div className="rounded-xl p-6 flex relative">
          <Image src="/assets/news-2.png" alt="news-images" width={200} height={100} />
          <div className="px-4">
            <span className="tags my-2 w-[500px] absolute">News</span>
            <div className="font-medium text-2xl my-2 w-[500px]">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</div>
            <div className="my-2 w-[500px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
          </div>
        </div>
        <div className="rounded-xl p-6 flex relative">
          <Image src="/assets/news-3.png" alt="news-images" width={200} height={100} />
          <div className="px-4">
            <span className="tags my-2 w-[500px] absolute">News</span>
            <div className="font-medium text-2xl my-2 w-[500px]">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</div>
            <div className="my-2 w-[500px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
          </div>
        </div>
        <div className="rounded-xl p-6 flex relative">
          <Image src="/assets/news-4.png" alt="news-images" width={200} height={100} />
          <div className="px-4">
            <span className="tags my-2 w-[500px] absolute">News</span>
            <div className="font-medium text-2xl my-2 w-[500px]">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</div>
            <div className="my-2 w-[500px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
