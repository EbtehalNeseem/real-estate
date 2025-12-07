import { useState, useEffect } from "react";
import { getWishlist, removeFromWishlist } from "../js/wishlist";

export default function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWishlist = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getWishlist();
      setWishlistItems(data.items || []);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const removeItem = async (wishlistId) => {
    await removeFromWishlist(wishlistId);
    setWishlistItems((prev) => prev.filter((item) => item.wishlistId !== wishlistId));
  };

  return { wishlistItems, isLoading, error, removeItem ,fetchWishlist };
}
