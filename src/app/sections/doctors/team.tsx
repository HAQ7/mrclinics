import React from "react";
import DoctorCard from "./doctorCard";
import doctor from "@/assets/doctor.svg"; // Update path as needed

export default function Team() {
  return (
    <div className="px-4 py-8">
      <div className="bg-mrclinics-primary p-16 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Meet Our Doctors
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <DoctorCard
            image={doctor}
            title="Dr. John Doe"
            description="Cardiologist"
          />
          <DoctorCard
            image={doctor}
            title="Dr. Jane Smith"
            description="Dermatologist"
          />
          <DoctorCard
            image={doctor}
            title="Dr. Ahmed Ali"
            description="Pediatrician"
          />
          <DoctorCard
            image={doctor}
            title="Dr. John Doe"
            description="Cardiologist"
          />
          <DoctorCard
            image={doctor}
            title="Dr. Jane Smith"
            description="Dermatologist"
          />
          <DoctorCard
            image={doctor}
            title="Dr. Ahmed Ali"
            description="Pediatrician"
          />
          <DoctorCard
            image={doctor}
            title="Dr. John Doe"
            description="Cardiologist"
          />
          <DoctorCard
            image={doctor}
            title="Dr. Jane Smith"
            description="Dermatologist"
          />

          {/* Add more DoctorCard components as needed */}
        </div>
      </div>
    </div>
  );
}
