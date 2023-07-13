import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const SignInModal = (props) => {
  const copyDeployerWallet = () => {
    navigator.clipboard.writeText("0x49AE63056b3A0Be0B166813eE687309Ab653c07c");
    // toast.success("Address copied");
  };
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={props.setOpen}
      >
        <div className="flex items-center justify-center min-h-screen  text-center text-white">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          {/* <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className=" rounded-lg overflow-hidden transform transition-all "
              style={{
                backgroundColor: "#022f5d",
                width: "512px",
                height: "432px",
                fontFamily: "Inter",
                fontStyle: "Semi Bold",
                borderRadius: "8px",
                color: "#FFFFFF",
                padding: "0 36px",
                fontSize: "18px",
                lineHeight: "21px",
              }}
            >
              <div className="flex flex-col justify-start items-start text-left">
                <div
                  onClick={() => {
                    props.setOpen(false);
                  }}
                  className="cursor-pointer flex w-full items-center justify-end mt-10"
                >
                  
                  X
                </div>
                <div className="h-[60px] text-[50px] flex items-center justify-center w-full ">
                  
                  Sign In
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                  <input
                    className="w-full rounded bg-transparent h-[50px] p-2"
                    placeholder="User Name"
                    type="text"
                  />
                  <input
                    className="w-full rounded bg-transparent h-[50px] p-2"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div className="w-full ">
                  <button className="w-full mt-4 h-[50px] rounded bg-blue-600 flex items-center justify-center ">
                    Login
                  </button>
                </div>
                <div className=" w-full flex items-center justify-between mt-4">
                  <div className="flex gap-2 ">
                    <input id="savePassword" type="checkbox" />
                    <label htmlFor="savePassword">Save Password</label>
                  </div>
                  <div className="hover:text-blue-500 cursor-pointer">
                    Forget Password?
                  </div>
                </div>
                <div className="border border-l-0 border-r-0 border-b-0 border-t-1 mt-6 w-full pt-4 flex text-center justify-center items-center text-[14px]">
                  Don't have an account yet?
                  <span
                    className="cursor-pointer hover:text-blue-500 pl-2"
                    onClick={() => {
                      props.setOpen(false);
                      props.setOpenUpModal(true);
                    }}
                  >
                    Sign Up
                  </span>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SignInModal;