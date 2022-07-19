import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/inertia-react';

import Main from '@/Pages/Front/Main';
import Footer from '@/Pages/Front/Footer';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
}

export default function Welcome({
  canLogin,
  canRegister
}: Props) {
  const route = useRoute();
  const page = useTypedPage();

  return (
    <div className="min-h-screen bg-gray-100">
      <Head title="Welcome" />

      {canLogin ? (
        <h1 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex'>
                        <div className='flex-shrink-0 flex items-center'>Nts Japan Ltd</div>
                    </div>
                <div className='hidden sm:flex sm:items-center sm:ml-6'>
          {page.props.user ? (
            <InertiaLink
              href={route('dashboard')}
              className="text-sm text-gray-700 underline"
            >
              Dashboard
            </InertiaLink>
          ) : (
            <>
              <InertiaLink
                href={route('login')}
                className="text-sm text-gray-700 underline"
              >
                Log in
              </InertiaLink>

              {canRegister ? (
                <InertiaLink
                  href={route('register')}
                  className="ml-4 text-sm text-gray-700 underline"
                >
                  Register
                </InertiaLink>
              ) : null}
            </>
          )}
          </div>
          </div>
          </div>
        </h1>
      ) : null}

      <div className="">
        <Main />
      </div>
        <Footer />
    </div>
  );
}
