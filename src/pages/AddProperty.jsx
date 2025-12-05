import { useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";


export default function AddProperty() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "buy",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.from("properties").insert([formData]);

    setLoading(false);

    if (!error) {
      alert("Property added successfully!");
      navigate("/dashboard/manage");
    } else {
      alert("Error adding property");
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-[var(--primary)] text-2xl font-semibold mb-6">
        Add New Property
      </h2>

      <form
        onSubmit={handleSubmit}
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
          <label className="text-[var(--accent)] font-bold">
            Description
          </label>
          <textarea
            name="description"
            required
            rows="3"
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
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[15px] pointer-events-none" />
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

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-[var(--beige)] text-[var(--primary)] font-bold p-3 rounded-xl font-semibold hover:text-[var(--beige)] hover:bg-[var(--primary)]/50 transition disabled:opacity-50"        >
          {loading ? "Adding..." : "Add Property"}
        </button>
      </form>
    </div>
  );
}
