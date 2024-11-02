import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Alert className="w-fit">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This page doesn&apos;t exist</AlertDescription>
      </Alert>
    </div>
  );
};

export default NotFoundPage;
