export default function BlogTile() {
  return (
    <div className="py-4">
      <div className="basis-96 grow shrink ">
        <h3 className="text-2xl font-bold font-averta">
          this is title of blog tile
        </h3>
        <span className="font-averta md:text-lg">
          this is going to be the subtitle of the blog title about 10 worrds
          long.
        </span>
        <div className="font-averta mt-3 text-sm text-opacity-70 text-black flex flex-nowrap items-center gap-2 ">
          <span> 3 Min Read</span>
          <div className="h-1 w-1 rounded-full bg-dark"></div>
          <span>22 May 2021 </span>
        </div>
      </div>
    </div>
  );
}
