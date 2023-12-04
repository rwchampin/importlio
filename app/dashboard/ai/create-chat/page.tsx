"use client";
import React, { useEffect } from 'react'
import Dashboard from '@/app/dashboard/Dashboard'
import Form from '@/components/forms/Form'
import useAiChat from '@/hooks/use-ai-chat'

export default function Page() {
    const {
		formData,
		isLoading,
		onChange,
		onSubmit,
	}:any = useAiChat();


    

    const fetchAssistants = async () => {
        const res = await fetch(`/api/ai/assistants/`)
        const { assistants } = await res.json()
        return assistants
    }

    const config = [
        {
            "type": "text",
            "name": "name",
            "label": "Name",
            "placeholder": "Name",
            "required": true,
            "value": formData.name,
        },{
            "type": "text",
            "name": "description",
            "label": "Description",
            "placeholder": "Description",
            "required": true,
            "value": formData.description,
        },{
            "type": "select",
            "name": "assistant",
            "label": "Assistant",
            "placeholder": "Assistant",
            "required": true,
            "value": formData.assistant.id,
            "data": fetchAssistants,
        }
    ]
  return (
    <Dashboard>
        <Form 
            config={config}
            isLoading={isLoading}
            onChange={onChange}
            onSubmit={onSubmit}

        />
    {JSON.stringify(formData)}
    </Dashboard>
  )
}
