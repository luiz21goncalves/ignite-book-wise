import { Rating } from '@/components/Rating'

export function Comment() {
  return (
    <article className="w-full flex flex-col gap-8 p-6 rounded-lg bg-gray-700">
      <header className="flex flex-row gap-4 items-start justify-between">
        <div className="w-full flex flex-row gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-vertical" />

          <div className="flex flex-col">
            <strong className="text-mg font-bold">Jaxson Dias</strong>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>

        <Rating rating={4} />
      </header>

      <div className="flex flex-row gap-5">
        <div className="w-[108px] h-[152px] rounded bg-gradient-vertical flex-shrink-0" />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <strong className="text-heading-xs font-bold">O Hobbit</strong>
            <span className="text-sm text-gray-400">J.R.R. Tolkien</span>
          </div>

          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            qui id incidunt placeat modi voluptatem quod illum possimus
            exercitationem nostrum enim rerum quaerat non sint error saepe,
            similique facilis tempora.
          </p>
        </div>
      </div>
    </article>
  )
}
