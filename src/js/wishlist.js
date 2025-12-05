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
// Add item to wishlist
export async function addToWishlist(productId) {
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id;
  if (!userId) throw new Error("User not logged in");

  const { data, error } = await supabase
    .from("wishlist")
    .insert([{ user_id: userId, product_id: productId }])
    .select(); // optional: return inserted row

  if (error) throw error;

  return data[0]; // return the added wishlist item
}


// Remove item from wishlist
export async function removeFromWishlist(wishlistId) {
  const { error } = await supabase.from("wishlist").delete().eq("id", wishlistId);
  if (error) throw error;
  return true;
}
