import { motion, AnimatePresence } from "framer-motion";
import { useAuthForms } from "../hooks/useAuthForms";

import ImagePanel from "../components/auth/ImagePanel";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

export default function AuthPage() {
  const {
    isLogin,
    setIsLogin,
    loginData,
    setLoginData,
    registerData,
    setRegisterData,
    errors,
    loading,
    handleLoginSubmit,
    handleRegisterSubmit,
    clearError,
  } = useAuthForms();

  return (
    <div className="w-full h-screen flex overflow-hidden bg-[var(--primary)]">
      {/* Desktop Form */}
      <ImagePanel isLogin={isLogin} />

      <motion.div
        animate={{ x: isLogin ? 0 : "-100%" }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20 bg-[var(--beige)]"
      >
        <h1 className="text-3xl font-bold text-[var(--primary)] mb-3">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <LoginForm
              loginData={loginData}
              setLoginData={setLoginData}
              errors={errors}
              clearError={clearError}
              handleLoginSubmit={handleLoginSubmit}
              loading={loading}
              setIsLogin={setIsLogin}
            />
          ) : (
            <RegisterForm
              registerData={registerData}
              setRegisterData={setRegisterData}
              errors={errors}
              clearError={clearError}
              handleRegisterSubmit={handleRegisterSubmit}
              loading={loading}
              setIsLogin={setIsLogin}
            />
          )}
        </AnimatePresence>
      </motion.div>

     
    </div>
  );
}


 {/* Mobile Form */}
     
{/* 
      <motion.div
        animate={{ x: isLogin ? 0 : "-100%" }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-20 bg-[var(--beige)] md:none"
      >
        <h1 className="text-3xl font-bold text-[var(--primary)] mb-6">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <LoginForm
              loginData={loginData}
              setLoginData={setLoginData}
              errors={errors}
              clearError={clearError}
              handleLoginSubmit={handleLoginSubmit}
              loading={loading}
              setIsLogin={setIsLogin}
            />
          ) : (
            <RegisterForm
              registerData={registerData}
              setRegisterData={setRegisterData}
              errors={errors}
              clearError={clearError}
              handleRegisterSubmit={handleRegisterSubmit}
              loading={loading}
              setIsLogin={setIsLogin}
            />
          )}
        </AnimatePresence>
      </motion.div> */}