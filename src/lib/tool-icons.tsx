import {
  Code2,
  Coffee,
  FileJson,
  Database,
  GitBranch,
  Box,
  Boxes,
  Cloud,
  Layers,
  FlaskConical,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const ICON_RULES: { match: RegExp; icon: LucideIcon }[] = [
  { match: /javascript/i, icon: FileJson },
  { match: /java\b/i, icon: Coffee },
  { match: /kotlin/i, icon: Code2 },
  { match: /sql/i, icon: Database },
  { match: /git/i, icon: GitBranch },
  { match: /docker/i, icon: Box },
  { match: /kubernetes/i, icon: Boxes },
  { match: /azure|cloud/i, icon: Cloud },
  { match: /uml|modeler|cameo/i, icon: Layers },
  { match: /junit|test/i, icon: FlaskConical },
  { match: /workflow|polarion|vba|bgw/i, icon: Workflow },
];

export function toolIcon(tool: string): LucideIcon {
  return ICON_RULES.find((rule) => rule.match.test(tool))?.icon ?? Code2;
}
