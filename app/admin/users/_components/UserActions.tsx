import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteUser } from "../../_actions/users";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      variant="destructive"
      onClick={() =>
        startTransition(async () => {
          await deleteUser(id);
          router.refresh();
        })
      }
      disabled={disabled || isPending}
    >
      Delete
    </DropdownMenuItem>
  );
}
