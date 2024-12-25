import React from "react";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Alicent Hightower",
      consultationType: "Skin care",
      date: "20 January 2023",
      review:
        "Might be a bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
      rating: 5,
    },
    {
      name: "Alicent Hightower",
      consultationType: "Pregnancy",
      date: "20 January 2023",
      review:
        "Might be a bit early to confirm but yes I can see noticeable difference. Will write again after using it for longer periods.",
      rating: 5,
    },
  ];

  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Featured Reviews (102)
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-lg shadow-sm"
          >
            {/* User Avatar */}
            <img
              src={`https://randomuser.me/api/portraits/women/${index + 1}.jpg`}
              alt={`${review.name}`}
              className="w-14 h-14 rounded-full object-cover"
            />
            {/* Review Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Consulted for {review.consultationType}
              </p>
              <p className="text-gray-700">{review.review}</p>
              <div className="mt-2 flex items-center">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className="text-yellow-500 text-lg mr-1"
                  >
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review.rating }).map(
                  (_, emptyIndex) => (
                    <span
                      key={emptyIndex}
                      className="text-gray-300 text-lg mr-1"
                    >
                      ★
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
