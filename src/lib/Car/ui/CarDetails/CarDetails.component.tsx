import LicensePlate from 'react-license-plate';

import { Car } from '@Car/Domain';

export interface CarDetailsProps {
  car: Car;
}

export const CarDetails = ({ car }: CarDetailsProps) => {
  return (
    <div className="flex flex-col w-full h-full" data-testid="carDetails">
      <div className="grid grid-cols-1 gap-2 text-xl">
        <img alt={car.name} src={car.pictureUrl} className="w-fit h-fit mx-auto" />
        <div className="flex items-center justify-center mb-10">
          <LicensePlate plateId={car.regNumber} countryCode="ES" height={50} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold text-end">Model</div>
          <div>
            <input type="text" defaultValue={car.name} />
          </div>
          <div className="font-bold text-end">License plate</div>
          <div>
            <input className="border-b-1 border-b-black" type="text" defaultValue={car.regNumber} />
          </div>
          <div className="font-bold text-end">Engine</div>
          <div>
            <input type="text" defaultValue={car.details.engine} />
          </div>
          <div className="font-bold text-end">Max speed in Km/h</div>
          <div>
            <input type="text" defaultValue={car.details.maxSpeedInKmh} />
          </div>
          <div className="font-bold text-end">Extras</div>
          <div className="flex flex-col row-span-2">
            <div className="flex items-center">
              <input id="lightPack" type="checkbox" value="light pack" name="Light Pack" />
              <label className="text-lg cursor-pointer ml-1 mr-4" htmlFor="lightPack">
                Light Pack
              </label>
            </div>
            <div className="flex items-center">
              <input id="travelPack" type="checkbox" value="light pack" name="Light Pack" />
              <label className="text-lg cursor-pointer ml-1" htmlFor="travelPack">
                Travel Pack
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-4 mt-10">
        <button className="w-20 py-4 bg-black text-white h-full rounded">Back</button>
        <button className="w-20 py-4 bg-white text-black border h-full border-black rounded">Save</button>
      </div>
    </div>
  );
};
