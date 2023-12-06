import { Route, Routes } from 'react-router-dom';
import AuthLayout from './auth/AuthLayout';
import SigninForm from './auth/forms/SigninForm';
import RootLayout from './root/RootLayout';
import { Home } from './root/pages';
import SignUpForm from './auth/forms/SignUpForm';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
