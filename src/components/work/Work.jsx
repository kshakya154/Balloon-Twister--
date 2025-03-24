import React from "react";

function Work() {
  return (
    <div>
      <section className="bg-gray-900 overflow-hidden">
        <h2 className="text-white text-6xl font-bold mb-16">Our Work</h2>
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-11/12 flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1604668915840-580c30026e5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsbG9vbiUyMGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Image 1"
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1163718652/photo/delicious-wedding-reception-birthday-cake-on-a-background-balloons-party-decor-copy-space.jpg?s=612x612&w=0&k=20&c=Zml6qzgFd3sH7KQ4uFWKdqpy5qpKVKpVAV6xwVHIiyw="
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Image 2"
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1405876768/photo/decoration-for-a-childrens-party.jpg?s=612x612&w=0&k=20&c=7FBBE35SJ864kOr1D39VWxAWGHQzDb-H0l5IH0KG8d0="
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Image 3"
              />
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1482729972/photo/baby-shower-party-decor-photo-zone-arch-with-pink-and-blue-balloons-cubes-for-gender-party.jpg?s=612x612&w=0&k=20&c=MDu-moVbe6vKkxLjQn3Rh0jmqIYSHUmuYmaXpQ0OKvc="
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Image 4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
