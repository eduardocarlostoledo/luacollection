
// ProductReviews.jsx
import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export function ProductReviews({ reviews }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Customer Reviews</h3>
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardBody>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-default-200 flex items-center justify-center">{review.author[0]}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{review.author}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon="lucide:star" className={i < review.rating ? "text-warning" : "text-default-300"} />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-default-600">{review.comment}</p>
                <p className="mt-2 text-small text-default-400">{review.date}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}