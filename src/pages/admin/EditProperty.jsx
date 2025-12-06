import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../services/supabase";
import { ChevronDown } from "lucide-react";

export default function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Fetch property data by ID
  useEffect(() => {
    const fetchProperty = async () => {
      const { data, error } = await supabase
        .from("Properties")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setFormData(data);
      }

      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const { error } = await supabase
      .from("Properties")
      .update({
        title: formData.title,
        description: formData.description,
        price: formData.price,
        location: formData.location,
        type: formData.type,
        image: formData.image,
      })
      .eq("id", id);

    setUpdating(false);

    if (!error) {
      alert("Property updated successfully!");
      navigate("/dashboard/manage");
    } else {
      alert("Error updating property");
    }
  };

  if (loading) {
    return <p className="text-[var(--accent)] p-6">Loading property...</p>;
  }

  return (
    <div className="p-6 pt-5 ">
      <h2 className="text-[var(--primary)] text-2xl font-semibold mb-5">
        Edit Property
      </h2>

      <form
        onSubmit={handleUpdate}
        className="bg-[var(--light)] border border-[color:var(--light)] p-6 rounded-xl shadow-md max-w-2xl"
      >
        {/* Title */}
        <div className="mb-4">
          <label className="text-[var(--accent)] font-bold">Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded bg-[var(--beige)] text-[var(--primary)] font-medium outline-none"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-[var(--accent)] font-bold">Description</label>
          <textarea
            name="description"
            rows="3"
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded bg-[var(--beige)] text-[var(--primary)] font-medium outline-none"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="text-[var(--accent)] font-bold">Price</label>
          <input
            type="number"
            name="price"
            required
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded bg-[var(--beige)] text-[var(--primary)] font-medium outline-none"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="text-[var(--accent)] font-bold">Location</label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded bg-[var(--beige)] text-[var(--primary)] font-medium outline-none"
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="text-[var(--accent)] font-bold">Type</label>
          <div className="relative">
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full py-3 px-5 appearance-none mt-1 rounded bg-[var(--beige)] text-[var(--primary)] font-medium outline-none"
            >
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Image */}
        <div className="mb-4">
          <label className="text-[var(--accent)] font-bold">Image URL</label>
          <input
            type="text"
            name="image"
            required
            value={formData.image}
            onChange={handleChange}
            className="w-full p-3 mt-1 rounded bg-[var(--beige)] text-[var(--primary)] font-medium outline-none"
          />
        </div>

        <button
          disabled={updating}
          type="submit"
          className="w-full bg-[var(--beige)] text-[var(--primary)] font-bold p-3 rounded-xl font-semibold hover:text-[var(--beige)] hover:bg-[var(--primary)]/50 transition disabled:opacity-50"
        >
          {updating ? "Updating..." : "Update Property"}
        </button>
      </form>
    </div>
  );
}
