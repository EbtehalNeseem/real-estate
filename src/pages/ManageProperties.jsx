import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {supabase} from "../services/supabase";
import { Pencil, Trash2 } from "lucide-react";

export default function ManageProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Properties")
        .select("*");

      if (!error) setProperties(data);
    };

    fetchData();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this property?")) return;

    const { error } = await supabase
      .from("Properties")
      .delete()
      .eq("id", id);

    if (!error) {
      setProperties(properties.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-[var(--primary)] text-2xl font-semibold mb-6">
        Manage Properties
      </h2>

      <div className="overflow-x-auto rounded-xl border border-[color:var(--accent)]">
        <table className="w-full text-left">
          <thead className="bg-[var(--primary)]">
            <tr>
              <th className="p-4 text-white font-bold">Image</th>
              <th className="p-4 text-white font-bold">Title</th>
              <th className="p-4 text-white font-bold">Price</th>
              <th className="p-4 text-white font-bold">Location</th>
              <th className="p-4 text-white font-bold">Type</th>
              <th className="p-4 text-white font-bold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[color:var(--light)] hover:bg-[var(--beige)] hover:text-[var(--accent)] transition"
              >
                <td className="p-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-4 font-bold text-[var(--primary)]">{p.title}</td>
                <td className="p-4 text-[var(--light)]  ">{p.price} EGP</td>
                <td className="p-4 text-[var(--light)]">{p.location}</td>
                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-[var(--beige)] text-[var(--primary)] font-semibold">
                    {p.type}
                  </span>
                </td>

                <td className="p-4 flex items-center gap-3">
                  <Link
                    to={`/dashboard/edit/${p.id}`}
                    className="px-2 pt-5 "
                  >
                    <Pencil size={18} className="text-[var(--light)]  hover:text-[var(--accent)]" />
                  </Link>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-2 pt-5"
                  >
                    <Trash2 size={18} className="text-red-600 hover:text-red-900" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
