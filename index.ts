import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const ENDPOINT = "enp_123456";

const handler = async (_request: Request): Promise<Response> => {
	const res = await fetch(`https://api.formizee.com/v1/f/${ENDPOINT}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: "example",
			email: "example@mail.com",
		}),
	});
	const data = await res.json();
	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

serve(handler);
