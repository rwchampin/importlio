"use client";
import Link from "next/link";

import RegisterForm from "@/components/forms/RegisterForm";

import LogoBlack from "@/components/common/LogoBlack";
import SocialButtons from "@/components/common/SocialButtons";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  let showFreeMessage = false;
  if (params?.free) {
    showFreeMessage = true;
  }
  return (
    <>
      <p className="bg-gray-300 text-heading-4 p-3">
        Register now for a limited time only free trial of Importlio. Get access
        to our entire database of email lists to market your products and
        services to. As well as the Shopify Product Importer app to import
        products from Amazon to your Shopify store.
      </p>

      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
          <LogoBlack />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm />
          <SocialButtons />

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold leading-6 text-black"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
