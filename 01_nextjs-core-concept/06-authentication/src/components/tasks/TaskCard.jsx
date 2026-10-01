import { Button, Card } from '@heroui/react';

export default function TaskCard({ task }) {
  const { title, description, status } = task;
  return (
    <Card className="">
      <Card.Header>
        <Card.Title className="text-black text-xl mb-2">{title}</Card.Title>
        <Card.Description className="text-black">
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer className="text-black">{status}</Card.Footer>
      <Button size="sm" variant="primary">
        Edit
      </Button>
    </Card>
  );
}
