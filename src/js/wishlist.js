import { supabase } from "../services/supabase";

// fetch user for all functions
async function getCurrentUserId() {
  const { data: { user } } = await supabase.auth.getUser();
  return user?.id || null;
}

// Fetch wishlist for current user
export async function getWishlist() {
  const userId = await getCurrentUserId();
  if (!userId) return { items: [] };

  const { data, error } = await supabase
    .from("wishlist")
    .select("id, property:properties(*)")
    .eq("user_id", userId);

  if (error) throw error;

  return {
    items: data.map((row) => ({
      ...row.property,
      wishlistId: row.id,
    })),
  };
}


// Add item to wishlist
export async function addToWishlist(propertyId) {
  const userId = await getCurrentUserId();
  if (!userId) throw new Error("User not logged in");

  const { data, error } = await supabase
    .from("wishlist")
    .insert({ user_id: userId, property_id: propertyId });

  if (error) throw error;
  return data;
}


// Remove item from wishlist
export async function removeFromWishlist(propertyId) {
  const userId = await getCurrentUserId();
  if (!userId) throw new Error("User not logged in");

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("user_id", userId)
    .eq("property_id", propertyId);

  if (error) throw error;

  return true;
}
