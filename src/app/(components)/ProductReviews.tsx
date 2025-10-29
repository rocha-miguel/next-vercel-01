import { getReviews } from "../actions";

export async function ProductReviews() {
  const reviews = await getReviews();

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Últimas Avaliações</h3>
      {reviews.length === 0 ? (
        <p>Ainda não há avaliações. Seja o primeiro!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="p-4 border rounded-lg bg-gray-50 text-black">
              <p className="font-bold">{r.author}</p>
              <p className="mt-1">{r.review}</p>
              <p className="text-xs text-gray-500 mt-2">{r.createdAt.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}