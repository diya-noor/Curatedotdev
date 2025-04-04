import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./components/ui/button";
import {
  CheckCircle,
  ThumbsUp,
  Award,
  FileText,
  Search,
  Leaf,
  ArrowDown,
  ArrowUp,
  LineChart,
  Coins,
  ChevronsUpDown,
  BadgeCent,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Types
interface BadgeItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBgColor: string;
  points: number;
  achieved: boolean;
  progress?: number;
  total?: number;
  iconName?: string;
}

interface PointLogItem {
  id: number;
  type: string;
  description: string;
  points: number;
  time: string;
  isPositive: boolean;
}

// Sample data
const badgesData: BadgeItem[] = [
  {
    title: "Content Novice",
    subtitle: "Successfully Create 50 Content",
    icon: <FileText size={24} />,
    iconBgColor: "bg-yellow-200",
    points: 100,
    achieved: true,
    iconName: "badge-cent",
  },
  {
    title: "Content Master",
    subtitle: "Successfully Create 50 Content",
    icon: <Award size={24} />,
    iconBgColor: "bg-gray-300",
    points: 100,
    achieved: true,
    iconName: "badge-cent",
  },
  {
    title: "Curator OG",
    subtitle: "Successfully Curate 1000 Content",
    icon: <Search size={24} />,
    iconBgColor: "bg-blue-300",
    points: 100,
    achieved: true,
    iconName: "badge-cent",
  },
  {
    title: "Content Master",
    subtitle: "Successfully Create 50 Content",
    icon: <Leaf size={24} />,
    iconBgColor: "bg-green-200",
    points: 500,
    achieved: false,
    progress: 40,
    total: 100,
  },
];

const pointsLogData: PointLogItem[] = [
  {
    id: 1,
    type: "Content Submission",
    description: "Content Submission",
    points: 50,
    time: "10:24PM",
    isPositive: true,
  },
  {
    id: 2,
    type: "Approved Content",
    description: "Approved Content",
    points: 20,
    time: "10:20PM",
    isPositive: true,
  },
  {
    id: 3,
    type: "Approved Content",
    description: "Approved Content",
    points: 20,
    time: "10:20PM",
    isPositive: true,
  },
  {
    id: 4,
    type: "Points Redemption",
    description: "Points Redemption",
    points: 90,
    time: "10:20PM",
    isPositive: false,
  },
  {
    id: 5,
    type: "Approved Content",
    description: "Approved Content",
    points: 20,
    time: "10:20PM",
    isPositive: true,
  },
  {
    id: 6,
    type: "Approved Content",
    description: "Approved Content",
    points: 20,
    time: "10:20PM",
    isPositive: true,
  },
  {
    id: 7,
    type: "Approved Content",
    description: "Approved Content",
    points: 20,
    time: "10:20PM",
    isPositive: true,
  },
];

// Components
const PointsOverviewCard = ({
  totalPoints,
  monthlyIncrease,
  tokensEarned,
}: {
  totalPoints: number;
  monthlyIncrease: string;
  tokensEarned: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total Points</span>
              <span className="text-2xl font-bold">
                {totalPoints.toLocaleString()}
              </span>
              <span className="text-xs text-gray-400">
                {monthlyIncrease} increase this month
              </span>
            </div>
            <LineChart size={24} className="text-gray-400" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Tokens Earned</span>
              <span className="text-2xl font-bold">{tokensEarned}</span>
            </div>
            <Coins size={24} className="text-gray-400" />
          </div>
          <div className="mt-3">
            <Button className="w-full py-2 bg-black text-white hover:bg-gray-800">
              Redeem Points
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const BadgeCard = ({ badge }: { badge: BadgeItem }) => {
  return (
    <Card className="flex-1">
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center gap-2">
          <div
            className={`w-16 h-16 rounded-full ${badge.iconBgColor} flex items-center justify-center`}
          >
            {badge.icon}
          </div>
          <h3 className="font-medium text-sm">{badge.title}</h3>
          <p className="text-xs text-gray-500 h-10 flex items-center">
            {badge.subtitle}
          </p>

          <div className="w-3/4 border-t border-dashed border-black my-1"></div>

          {!badge.progress && (
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium">{badge.points} Points</span>
              {badge.achieved && (
                <BadgeCent size={16} className="text-green-500" />
              )}
            </div>
          )}

          {badge.progress !== undefined && badge.total !== undefined && (
            <div className="w-full mt-2">
              <div className="w-full h-2 bg-green-100 rounded-full">
                <div
                  className="h-2 bg-green-600 rounded-full"
                  style={{ width: `${(badge.progress / badge.total) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>40</span>
                <span>{badge.points} Points</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const PointsLogTable = ({ data }: { data: PointLogItem[] }) => {
  return (
    <Table>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id} className="border-b border-gray-100">
            <TableCell className="py-3 pr-2 w-10">
              <div
                className={`w-8 h-8 rounded-md ${
                  item.id === 4 ? "bg-red-50" : "bg-green-100"
                } flex items-center justify-center`}
              >
                {item.id === 4 ? (
                  <ArrowUp size={16} className="text-red-400" />
                ) : (
                  <ArrowDown size={16} className="text-green-600" />
                )}
              </div>
            </TableCell>

            <TableCell className="py-3 pl-2 pr-4">
              <div>
                <span className="text-xs text-gray-500">Type</span>
                <p className="text-sm">{item.description}</p>
              </div>
            </TableCell>

            <TableCell className="py-3 pl-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                  <ThumbsUp size={12} className="text-gray-500" />
                </div>
                <div>
                  <span className="text-xs text-gray-500">Points</span>
                  <p className="text-sm">
                    {item.isPositive ? "+" : "-"} {item.points}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell className="py-3 text-right">
              <div>
                <span className="text-xs text-gray-500">Time</span>
                <p className="text-sm">{item.time}</p>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const PaginationControls = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <button className="flex items-center gap-1 px-2 py-1 text-gray-400 hover:text-gray-600">
              <span>Previous</span>
            </button>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive className="bg-primary text-white">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              6
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="text-gray-400" />
          </PaginationItem>

          <PaginationItem>
            <button className="flex items-center gap-1 px-2 py-1 text-gray-400 hover:text-gray-600">
              <span>Next</span>
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

// Main Component
const PointsOverviewPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-200 rounded-lg">
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Points Overview</h2>
        <PointsOverviewCard
          totalPoints={2000}
          monthlyIncrease="5%"
          tokensEarned="250 SCGW"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Badges & Achievement</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badgesData.map((badge, index) => (
            <BadgeCard key={index} badge={badge} />
          ))}
        </div>
      </section>

      <section>
        <Card className="mb-3">
          <CardContent className="p-0">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Points Log</h2>
              <Button
                variant="outline"
                size="sm"
                className="text-xs flex items-center justify-between px-3"
              >
                Filter
                <ChevronsUpDown size={14} className="ml-1" />
              </Button>
            </div>
            <PointsLogTable data={pointsLogData} />
          </CardContent>
        </Card>

        <PaginationControls />
      </section>
    </div>
  );
};

export default PointsOverviewPage;
