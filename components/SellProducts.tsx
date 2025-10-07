import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  {
    name: "HMI",
    image: "/images/HMI.webp",
    description: "Proface, Siemens, Allen Bradley.",
  },
  {
    name: "PLC",
    image: "/images/PLC.webp",
    description: "Siemens, Mitsubishi, Allen Bradley.",
  },
  {
    name: "VFD",
    image: "/images/VFD.webp",
    description: "Siemens, ABB, Danfoss, Schneider.",
  },
  {
    name: "Sensors",
    image: "/images/keyence-sensors.webp",
    description: "KEYENCE, IFM, Turck, Omron, Sick.",
  },
  {
    name: "Servo Motors & Drives",
    image: "/images/servomotors.webp",
    description: "Yaskawa, Siemens, Allen Bradley, Panasonic.",
  },
  {
    name: "Pneumatics & Hydraulics",
    image: "/images/VALVE.webp",
    description: "FESTO, SMC, AirTac, Parker.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10">Products We Sell</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {industries.map((industry) => (
            <Card
              key={industry.name}
              className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-56">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-6 text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
