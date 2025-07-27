import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const updates = [
  {
    id: 1,
    title: "Trending Slippers for the Season!",
    image: "https://ext.same-assets.com/1656697334/1777816299.webp",
    date: {
      day: "23",
      month: "Feb",
    },
    to: "/trending-slippers-for-the-season",
  },
  {
    id: 2,
    title: "Exciting News! New Rice Stock Has Arrived.",
    image: "https://ext.same-assets.com/1656697334/986026215.webp",
    date: {
      day: "23",
      month: "Feb",
    },
    to: "/exciting-news-new-rice-stock-has-arrived",
  },
];

export function LatestUpdatesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-muted-foreground mb-12">
          LATEST UPDATE
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {updates.map((update) => (
            <Link to={update.to} key={update.id}>
              <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-center rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-lg font-bold leading-none">
                        {update.date.day}
                      </div>
                      <div className="text-xs">{update.date.month}</div>
                    </div>

                    {/* Post Image */}
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200 leading-tight">
                      {update.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
