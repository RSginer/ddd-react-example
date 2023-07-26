import { MouseEvent, useState } from 'react';
import LicensePlate from 'react-license-plate';

import { Car } from '@Car/Domain';

export interface CarDetailsProps {
  car: Car;
  onBackButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onSave: (car: Car) => void;
}

export const CarDetails = ({ car, onBackButtonClick, onSave }: CarDetailsProps) => {
  const [updatedCar, setUpdatedCar] = useState<Car>(car);

  return (
    <div className="flex flex-col w-full h-full" data-testid="carDetails">
      <div className="grid grid-cols-1 gap-2 text-xl">
        <img alt={car.name} src={car.pictureUrl} className="w-fit h-fit mx-auto" />
        <div className="flex items-center justify-center mb-10">
          <LicensePlate plateId={updatedCar.regNumber} countryCode="ES" height={50} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-bold text-end">Model</div>
          <div>
            <input
              type="text"
              defaultValue={car.name}
              onChange={(e) => setUpdatedCar({ ...updatedCar, name: e.target.value })}
            />
          </div>
          <div className="font-bold text-end">License plate</div>
          <div>
            <input
              className="border-b-1 border-b-black"
              type="text"
              defaultValue={car.regNumber}
              onChange={(e) => setUpdatedCar({ ...updatedCar, regNumber: e.target.value })}
            />
          </div>
          <div className="font-bold text-end">Engine</div>
          <div>
            <input
              type="text"
              defaultValue={car.details.engine}
              onChange={(e) =>
                setUpdatedCar({
                  ...updatedCar,
                  details: {
                    ...car.details,
                    engine: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className="font-bold text-end">Max speed in Km/h</div>
          <div>
            <input
              type="number"
              onChange={(e) =>
                setUpdatedCar({
                  ...updatedCar,
                  details: {
                    ...car.details,
                    maxSpeedInKmh: parseInt(e.target.value),
                  },
                })
              }
              defaultValue={car.details.maxSpeedInKmh}
            />
          </div>
          <div className="font-bold text-end">Extras</div>
          <div className="flex flex-col row-span-2">
            <div className="flex items-center">
              <input
                id="lightPack"
                defaultChecked={car.details.extras.lightPack}
                type="checkbox"
                value="light pack"
                name="Light Pack"
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    details: {
                      ...updatedCar.details,
                      extras: {
                        ...updatedCar.details.extras,
                        lightPack: e.target.checked,
                      },
                    },
                  })
                }
              />
              <label className="text-lg cursor-pointer ml-1 mr-4" htmlFor="lightPack">
                Light Pack
              </label>
            </div>
            <div className="flex items-center">
              <input
                defaultChecked={car.details.extras.travelKit}
                id="travelPack"
                type="checkbox"
                value="travel kit"
                name="Travel kit"
                onChange={(e) =>
                  setUpdatedCar({
                    ...updatedCar,
                    details: {
                      ...updatedCar.details,
                      extras: {
                        ...updatedCar.details.extras,
                        travelKit: e.target.checked,
                      },
                    },
                  })
                }
              />
              <label className="text-lg cursor-pointer ml-1" htmlFor="travelPack">
                Travel Pack
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-4 mt-10">
        <button className="w-20 py-4 bg-black text-white h-full rounded" onClick={onBackButtonClick}>
          Back
        </button>
        <button
          disabled={JSON.stringify(updatedCar) === JSON.stringify(car)}
          className="w-20 py-4 bg-white text-black disabled:cursor-not-allowed disabled:bg-gray-300 border h-full border-black rounded"
          onClick={() => onSave(updatedCar)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
