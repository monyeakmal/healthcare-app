import { ThemeProvider } from "next-themes";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex h-screen max-h-screen">
        {/* TODO: OTP VERIFICATION | PASSKEY */}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image
              src="/assets/icons/logo-full.svg"
              height={40}
              width={40}
              alt="Patient"
              className="mb-12 h-10 w-fit"
            />

            <PatientForm />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 CarePlus
              </p>
              <p>
                <Link href="/?admin=true">
                  <span className="text-green-700 dark:text-green-500">Admin</span>
                </Link>
              </p>
            </div>
          </div>
        </section>

        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="Patient"
          className="side-img max-w-[50%]"
        />
      </div>
    </ThemeProvider>
  );
}
