import { publications, publicationYears } from '../data/publications';

export default function Publications() {
  const byYear = publicationYears.reduce((acc, year) => {
    const pubs = publications.filter(p => p.year === year);
    if (pubs.length) acc[year] = pubs;
    return acc;
  }, {});

  return (
    <div className="w-full flex justify-center">
      <div className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl w-full">
        {/* Header */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Journal Publications
          </h1>
          <p className="text-gray-600 max-w-xl text-sm md:text-base">
            {publications.length} publications
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* Results */}
        <div className="space-y-10">
          {Object.entries(byYear)
            .sort(([a], [b]) => b - a)
            .map(([year, pubs]) => (
              <div key={year}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-mono text-sm font-semibold text-gray-900">{year}</h2>
                  <div className="flex-1 border-t border-gray-300" />
                  <span className="text-xs text-gray-500">{pubs.length}</span>
                </div>
                <div className="space-y-6">
                  {pubs.map((pub, index) => (
                    <div key={pub.id} className="pl-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold">{index + 1}.</span>{' '}
                        {pub.authors.join(', ')} ({pub.year}). {pub.title}.{' '}
                        <span className="italic">{pub.venue}</span>
                        {pub.doi && <span>, {pub.doi}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
