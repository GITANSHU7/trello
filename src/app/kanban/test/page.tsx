"use client";

import { Button, Card, TextInput } from "flowbite-react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="h-[3000px]">
      <div className="flex justify-between">
        <div className="">abc</div>
        <div className=" ">def</div>
      </div>
      <div className="">
        {" "}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                //   quality={50}
                src="/jeep.jpg"
                className="w-full h-[200px] object-cover"
                width={250}
                height={250}
                alt="image"
              />
            )}
            horizontal={true}
          >
            <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card> */}
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                src="/Frame1.svg"
                className="p-4 w-[100px] 2xl:w-[150px]"
                width={150}
                height={150}
                alt="image"
              />
            )}
            horizontal
          >
            <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              Introducing tags
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
              Easily categorize and find your notes by adding tags. Keep your
              workspace clutter-free and efficient.
            </p>
          </Card>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                src="/Frame2.svg"
                className="p-4 w-[100px] xl:w-[150px]"
                width={150}
                height={150}
                alt="image"
              />
            )}
            horizontal
          >
            <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              Share Notes Instantly
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
              Effortlessly share your notes with others via email or link.
              Enhance collaboration with quick sharing options.
            </p>
          </Card>
          <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                src="/Frame3.svg"
                className="p-4 w-[100px] xl:w-[150px]"
                width={150}
                height={150}
                alt="image"
              />
            )}
            horizontal
          >
            <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
              Access Anywhere
            </h5>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
              Sync your notes across all devices. Stay productive whether
              you&apos;re on your phone, tablet, or computer.
            </p>
          </Card>
          {/* <Card
            className="max-w-sm"
            renderImage={() => (
              <Image
                src="/undraw.svg"
                className="p-4 dark:bg-gray-900 bg-neutral-100"
                width={200}
                height={200}
                alt="image"
              />
            )}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card> */}
        </div>
      </div>
      <div className="flex mt-2">
        <div className="">
          <TextInput
            id="email4"
            type="email"
            // icon={HiMail}
            rightIcon={FaSearch}
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <TextInput
            id="email4"
            type="email"
            // icon={HiMail}
            rightIcon={FaSearch}
            placeholder="name@flowbite.com"
            required
          />
          <TextInput
            id="email4"
            type="email"
            // icon={HiMail}
            rightIcon={FaSearch}
            placeholder="name@flowbite.com"
            required
          />
          <div>
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
