import { comments } from '../data';
export async function GET(request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ error: 'Comment not found' }, { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  console.log(body);
  comment.text = body.text;
  return Response.json(comment);
}
export async function DELETE(request, { params }) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  const indexId = comments.findIndex((comment) => comment.id === parseInt(id));
  comments.splice(indexId, 1);
  return Response.json({
    deletedID: id,
    data: comment,
  });
}
