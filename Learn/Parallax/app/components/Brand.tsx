import ExitL from "./ExitL";

const Brand = ({size="1.1rem"}: {size?: string}) => <a className="font-semibold cursor-pointer" href="https://exit-l.com.au">
            <ExitL size={size} /><br />
            <b className="text-red-800 block text-nowrap" style={{fontSize: size}}>Driving School</b>
          </a>;

export default Brand;
