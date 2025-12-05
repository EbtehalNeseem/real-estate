import { motion } from "framer-motion";

export default function AuthImagePanel({ isLogin }) {
  return (
    <motion.div
      animate={{ x: isLogin ? 0 : "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="hidden md:flex md:w-1/2 h-full bg-[var(--light)] justify-center items-center shadow-xl"
    >
      <motion.img
        key={isLogin ? "login-img" : "register-img"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={
          isLogin
            ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            : "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
        }
        className="w-full h-full object-cover"
        alt=""
      />
    </motion.div>
  );
}
