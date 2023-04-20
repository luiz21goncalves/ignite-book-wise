import { Rating } from '@/components/Rating'

export function BookCard() {
  return (
    <div className="flex flex-col gap-2">
      <time className="text-sm text-gray-400">Há 2 dias</time>

      <div className="p-6 flex flex-col gap-6 bg-gray-700 rounded-lg">
        <div className="flex flex-row gap-6">
          <div className="w-[98px] h-[134px] bg-gradient-horizontal rounded flex-shrink-0" />

          <div className="w-full flex flex-col justify-between items-start">
            <div className="flex flex-col">
              <strong className="text-heading-xs font-bold">
                Entendendo Algoritmos
              </strong>
              <span className="text-sm text-gray-400">Aditya Bhargava</span>
            </div>

            <Rating rating={4} />
          </div>
        </div>

        <p className="text-sm text-gray-300">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </div>
    </div>
  )
}
