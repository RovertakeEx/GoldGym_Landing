import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";
import { toast } from "react-toastify";

interface PackageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  isPopular: boolean;
}

const PackageDialog = ({
  isOpen,
  onClose,
  packageName,
  isPopular,
}: PackageDialogProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    phoneno: "",
    age: "",
  });

  const clearFields = () => {
    setFormData({
      name: "",
      phoneno: "",
      age: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneno || !formData.age) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Format message
    const message = `
Join *${packageName}* Plan
    
Name    :  _${formData.name}_
Phone   :  _${formData.phoneno}_
age     :  _${formData.age}_`;

    const encodedMessage = encodeURIComponent(message);

    // Detect if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `whatsapp://send?phone=${"94717100072"}&text=${encodedMessage}` // opens WhatsApp app on mobile
      : `https://wa.me/${"94717100072"}?text=${encodedMessage}`; // opens WhatsApp Web/Desktop

    toast.success("Joined successfully.");
    window.open(url, "_blank");
    closeDialog();
  };

  const closeDialog = () => {
    clearFields();
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full sm:max-w-sm data-closed:sm:translate-y-0 data-closed:sm:scale-95 bg-surface-secondary`}
            >
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className={`${
                isPopular
                  ? "bg-gradient-to-b from-primary/20 to-primary/5"
                  : "bg-surface-secondary"
              }`} >
                  <div className="px-4 pt-5 pb-2 sm:p-6 sm:pb-2">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left flex-grow">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold flex justify-between"
                        >
                          <span>
                            Join {packageName} Plan &nbsp;
                            <span className="text-primary text-xs">
                              {isPopular ? "(Most Popular)" : ""}
                            </span>
                          </span>
                          <button
                            className="bg-none border-0 cursor-pointer"
                            type="button"
                            onClick={closeDialog}
                          >
                            <X size={15} />
                          </button>
                        </DialogTitle>
                        <div className="mt-6 text-start">
                          <div className="mb-3">
                            <label
                              htmlFor=""
                              className="text-sm font-medium leading-none text-start"
                            >
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring/30"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor=""
                              className="text-sm font-medium leading-none"
                            >
                              Phone No <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="number"
                              name="phoneno"
                              id="phoneno"
                              value={formData.phoneno}
                              onChange={handleChange}
                              placeholder="Enter your mobile number"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring/30"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor=""
                              className="text-sm font-medium leading-none"
                            >
                              Age <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="number"
                              name="age"
                              id="age"
                              value={formData.age}
                              onChange={handleChange}
                              placeholder="e.g. 18, 19"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground md:text-sm mt-2 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-ring/30"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(43_70%_52%/0.3)] hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base w-full bg-gold-gradient text-background sm:ml-3 sm:w-1/2"
                    >
                      Join Now
                    </button>
                    <button
                      type="button"
                      data-autofocus
                      onClick={closeDialog}
                      className="mt-3 inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(43_70%_52%/0.3)] hover:scale-[1.02] active:scale-[0.98] h-12 rounded-2xl px-8 text-base w-full border-2 border-primary bg-transparent text-primary sm:mt-0 sm:w-1/2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PackageDialog;
