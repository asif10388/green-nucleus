import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Select, Notification } from "@mantine/core";

const FreeEventForm = () => {
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      college: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^01[0-9]{9}$/.test(value)
          ? null
          : "Invalid Phone Number(Don't use +88)",

      college: (value) =>
        value.length < 6
          ? "College/University must have at least 6 letters"
          : null,
    },
  });

  const handleSubmit = async () => {
    const res = await fetch("/api/submit?type=free_event", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.values),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    if (data) {
      alert("Your registration is successful. We will contact you soon.");
      form.reset();
    }
  };

  return (
    <div className="py-4">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="sm"
          label="Phone Number"
          placeholder="01XXXXXXXXX"
          {...form.getInputProps("phone")}
        />
        <TextInput
          mt="sm"
          label="College/University"
          placeholder="Daffodil International University"
          {...form.getInputProps("college")}
        />
        <Button type="submit" mt="sm" className="bg-dark-green">
          Submit
        </Button>
      </form>
    </div>
  );
};

const PaidEventForm = () => {
  const form = useForm({
    initialValues: {
      segment: "",
      phone: "",
      name: "",
      case_title: "",
      transactionId: "",
      email: "",
      college: "",
    },

    validate: {
      name: (value) =>
        value.length < 4 ? "Name must have at least 4 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^01[0-9]{9}$/.test(value) ? null : "Invalid Phone Number",
      college: (value) =>
        value.length < 6
          ? "College/University must have at least 6 letters"
          : null,
      case_title: (value) =>
        value.length < 6 ? "Case Title must have at least 6 letters" : null,
      transactionId: (value) =>
        value.length < 11 ? "Transaction ID must have 11 digits" : null,

      segment: (value) => (value.length < 1 ? "Please select a segment" : null),
    },
  });

  const handleSubmit = async () => {
    const res = await fetch("/api/submit?type=paid_event", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.values),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    if (data) {
      alert("Your registration is successful. We will contact you soon.");
      form.reset();
    }
  };

  return (
    <div className="py-4">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="sm"
          label="Phone Number"
          placeholder="01XXXXXXXXX"
          {...form.getInputProps("phone")}
        />
        <TextInput
          mt="sm"
          label="College/University"
          placeholder="Daffodil International University"
          {...form.getInputProps("college")}
        />
        <TextInput
          mt="sm"
          label="Case Title"
          placeholder="Project Armageddon"
          {...form.getInputProps("case_title")}
        />
        <TextInput
          mt="sm"
          label="bKash Transaction ID"
          placeholder="XXXXXXXXXXX"
          {...form.getInputProps("transactionId")}
        />
        <Select
          my={20}
          label="Segment"
          data={[
            { value: "", label: "Select an option", disabled: true },
            { value: "junior", label: "Junior" },
            { value: "senior", label: "Senior" },
          ]}
          {...form.getInputProps("segment")}
        />
        ;
        <Button type="submit" mt="sm" className="bg-dark-green">
          Submit
        </Button>
      </form>
      <span className="my-4 block bg-amber-50 p-4 rounded">
        You will be notified via SMS about your successful registration.
      </span>
    </div>
  );
};

import { useState } from "react";
import { Tabs } from "@mantine/core";

export default function Form() {
  const [activeTab, setActiveTab] = useState<string | null>("free");

  return (
    <section className="max-w-2xl mx-auto min-h-screen p-4 md:p-12">
      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="free">
            <span className="text-2xl"> Free Regsitration</span>
          </Tabs.Tab>
          <Tabs.Tab value="competitor">
            <span className="text-2xl"> Competetor Regsitration</span>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="free">
          <FreeEventForm />
        </Tabs.Panel>
        <Tabs.Panel value="competitor">
          <PaidEventForm />
        </Tabs.Panel>
      </Tabs>
    </section>
  );
}
