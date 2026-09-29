import { foods } from './data.';

export async function GET() {
  return Response.json(foods);
}
export async function POST(request) {
  const data = await request.json();
  const newFood = {
    id: crypto.randomUUID(),
    ...data,
  };
  foods.push(newFood);
  return new Response(JSON.stringify(newFood), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
