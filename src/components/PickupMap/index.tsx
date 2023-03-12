import { CircleSmall, PhoneIcon, ShareInMapIcon } from "components/SvgIcons";
import Modal from "react-modal";
import ShopMap from "./ShopMap";

const customStyles = {
  overlay: {
    backgroundColor: "#00000087",
    backdropFilter: "blur(3px)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1152px",
    borderRadius: "16px",
    borderColor: "transparent",
    padding: 0,
    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.08))",
  },
};

export default function PickUpMap(props: {
  isOpen: boolean;
  onClose: Function;
}) {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => onClose()}
    >
      <div className="max-w-[1152px] mx-auto inline-flex overflow-hidden">
        <div className="w-[352px]">
          <div className="">
            <h2 className="text-title-3 text-dark-gray font-bold p-4">
              Select Store
            </h2>
            {SHOPS.map((item, key) => (
              <ShopInMapItem
                key={key}
                isStock={item.isStock}
                isDelayed={item.isDelayed}
                name={item.name}
                distance={item.distance}
                address={item.address}
              />
            ))}
          </div>
        </div>
        <div className="w-[calc(100%-352px)]">
          <ShopMap />
        </div>
      </div>
    </Modal>
  );
}

const ShopInMapItem = (props: {
  isStock?: boolean;
  isDelayed?: boolean;
  name: string;
  address: string;
  distance: number;
}) => {
  const { isStock, isDelayed, address, name, distance } = props;
  return (
    <div className="flex p-4 hover:bg-dark-white">
      <div className="">
        {isStock && (
          <h5 className="flex items-center">
            <CircleSmall color="#35B050" />
            <span className="text-primary text-caption-1 font-bold ml-1">
              In Stock
            </span>
          </h5>
        )}
        {isDelayed && (
          <h5 className="flex items-center">
            <CircleSmall color="#FD881A" />
            <span className="text-warning text-caption-1 font-bold ml-1">
              Delayed Pickup
            </span>
          </h5>
        )}
        <h2 className="text-callout font-bold text-dark-gray my-2">{name}</h2>
        <h5 className="text-caption-1 text-light-gray font-semibold">
          {address}
        </h5>
        <p className="text-caption-1 text-dark-gray">
          Dispance: <span className="text-light-gray">{distance}km</span>
        </p>
      </div>
      <div className="w-[88px] flex">
        <button className="bg-lightest-gray rounded-lg p-2 w-10 h-10">
          <PhoneIcon />
        </button>
        <button className="bg-lightest-gray rounded-lg p-2 ml-2 w-10 h-10">
          <ShareInMapIcon />
        </button>
      </div>
    </div>
  );
};

const SHOPS = [
  {
    isStock: true,
    isDelayed: false,
    name: "Derma Pharmacy Olaya",
    address:
      "2570-2546 Street Number 74, As Sulimaniyah, Riyadh 12214, Saudi Arabia",
    distance: 1.2,
  },
  {
    isStock: false,
    isDelayed: true,
    name: "Derma Pharmacy Olaya",
    address:
      "2570-2546 Street Number 74, As Sulimaniyah, Riyadh 12214, Saudi Arabia",
    distance: 1.2,
  },
  {
    isStock: true,
    isDelayed: false,
    name: "Derma Pharmacy Olaya",
    address:
      "2570-2546 Street Number 74, As Sulimaniyah, Riyadh 12214, Saudi Arabia",
    distance: 1.2,
  },
  {
    isStock: false,
    isDelayed: true,
    name: "Derma Pharmacy Olaya",
    address:
      "2570-2546 Street Number 74, As Sulimaniyah, Riyadh 12214, Saudi Arabia",
    distance: 1.2,
  },
];
