import { supabase } from "../services/supabase";

// Fetch wishlist for current user
export async function getWishlist() {
  const user = supabase.auth.getUser(); 
  const userId = (await user).data.user?.id;
  if (!userId) return { items: [] };

  const { data, error } = await supabase
    .from("wishlist")
    .select("*, product(*)") 
    .eq("user_id", userId);

  if (error) throw error;

  return { items: data.map((row) => ({ ...row.product, wishlistId: row.id })) };
}

// Remove item from wishlist
export async function removeFromWishlist(wishlistId) {
  const { error } = await supabase.from("wishlist").delete().eq("id", wishlistId);
  if (error) throw error;
  return true;
}
