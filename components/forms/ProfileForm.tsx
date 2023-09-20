"use client";
import useProfile  from "@/hooks/use-profile";
import Form from "./Form";
export default function ProfileForm({
    user,
}:any) {
    const { formData, onChange, onSubmit }:any = useProfile(user);
    const config = [
        {
            name: "avatar",
            type: "file",
            label: "Avatar",
            placeholder: "Avatar",
            required: false,
            value: formData.avatar,
            onChange,
            error: "",
        },
        {
            name: "first_name",
            type: "text",
            label: "First Name",
            placeholder: "First Name",
            required: true,
            value: formData.first_name,
            onChange,
            error: "",
        },
        {
            name: "last_name",
            type: "text",
            label: "Last Name",
            placeholder: "Last Name",
            required: true,
            value: formData.last_name,
            onChange,
            error: "",
        },{
            name: "email",
            type: "email",
            label: "Email",
            placeholder: "Email",
            required: true,
            value: formData.email,
            onChange,
            error: "",
        },{
            name: "address",
            type: "text",
            label: "Address",
            placeholder: "Address",
            required: true,
            value: formData.address,
            onChange,
            error: "",
        },{
            name: "city",
            type: "text",
            label: "City",
            placeholder: "City",
            required: true,
            value: formData.city,
            onChange,
            error: "",
        },{
            name: "state",
            type: "select",
            label: "State",
            placeholder: "State",
            required: true,
            value: formData.state,
            onChange,
            error: "",
        },{
            name: "zip",
            type: "text",
            label: "Zip",
            placeholder: "Zip",
            required: true,
            value: formData.zip,
            onChange,
            error: "",
        },{
            name: "country",
            type: "select",
            label: "Country",
            placeholder: "Country",
            required: true,
            value: formData.country,
            onChange,
            error: "",
        },{
            name: "amazon_associate_id",
            type: "text",
            label: "Amazon Associate ID",
            placeholder: "Amazon Associate ID",
            required: true,
            value: formData.amazon_associate_id,
            onChange,
            error: "",
        },{
            name: "tz",
            type: "select",
            label: "Timezone",
            placeholder: "Timezone",
            required: true,
            value: formData.tz,
            onChange,
            error: "",
        },{
            name: "first_name",
            type: "text",
            label: "First Name",
            placeholder: "First Name",
            required: true,
            value: formData.first_name,
            onChange,
            error: "",
        },{
            name: "first_name",
            type: "text",
            label: "First Name",
            placeholder: "First Name",
            required: true,
            value: formData.first_name,
            onChange,
            error: "",
        },
    ]

    return (
        <Form
            config={config}
            onSubmit={onSubmit}
            onChange={onChange}
            btnText="Save"
        />
    );
}