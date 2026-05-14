import { courses } from '../data/people';

export default function Teaching() {
  return (
    <div className="w-full flex justify-center">
      <div className="px-6 md:px-10 lg:px-14 py-10 max-w-4xl w-full">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Teaching
          </h1>
          <p className="text-gray-600 max-w-xl text-sm md:text-base">
            I teach undergraduate courses in the Department of Geography and Environment at Shahjalal University of Science and Technology.
          </p>
        </section>

        <hr className="border-gray-300 my-8" />

        {/* Current Courses */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Teaching</h2>
          <div className="space-y-3">
            {courses.current.map((course, index) => (
              <div key={course.code} className="pl-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">{index + 1}.</span>{' '}
                  <span className="font-mono">{course.code}</span> - {course.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
