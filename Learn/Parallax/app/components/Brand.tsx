import ExitL from "./ExitL";

const Brand = ({size="1.1rem"}: {size?: string}) => <h1 className="font-semibold">
            <ExitL size={size} /><br />
            <b className="text-red-800 block text-nowrap" style={{fontSize: size}}>Driving School</b>
          </h1>;

export default Brand;
