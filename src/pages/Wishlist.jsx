import useWishlist from "../hooks/useWishlist";
import WishlistItem from "../components/WishlistItem";

export default function WishlistPage() {
  const { wishlistItems, isLoading, error, removeItem } = useWishlist();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">My Wishlist</h1>

      {isLoading && <p>Loading wishlist...</p>}
      {error && <p>Failed to load wishlist</p>}
      {wishlistItems.length === 0 && !isLoading && <p>Your wishlist is empty.</p>}

      <div className="space-y-4">
        {wishlistItems.map((item) => (
          <WishlistItem key={item.wishlistId} item={item} removeItem={removeItem} />
        ))}
      </div>
    </div>
  );
}
