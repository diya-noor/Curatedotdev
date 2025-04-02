import SmallContainer from "./components/ui/SmallContainer";

// Define mock data type
interface ContainerData {
  title: string;
  description?: string;
  status: "Approved" | "Pending" | "Rejected";
  moderationNotes?: {
    moderator: string;
    taggedUsers?: string[];
  };
  layout?:
    | "default"
    | "single-row"
    | "profile-inline"
    | "profile-stacked"
    | "special";
  userInfo: {
    profileImage: string;
    username: string;
    time: string;
  };
}

function App() {
  // Sample data with improved structure
  const containers: ContainerData[] = [
    {
      title:
        "Arbitrum DAO's 7,500 ETH Allocation Faces Mixed Reactions Over Non-Native Projects",
      description:
        "The Arbitrum DAO plans to allocate 7,500 ETH through the Growth Management Committee to generate low-risk yield and support ecosystem growth, with specific allocations to Lido, Aave, and Fluid, but faces mixed community reactions due to concerns about the timing of the proposal and the choice of non-native projects. The proposal will be voted on February 27, 2025, and if rejected, the GMC will consider community feedback for alternative options.",
      status: "Approved",
      moderationNotes: {
        moderator: "jpollock_",
        taggedUsers: [
          "@karmaticacid",
          "@ilhagirl",
          "@yegorgolovnia",
          "@PublicNouns",
        ],
      },
      layout: "default",
      userInfo: {
        profileImage: "/web3-plug.png",
        username: "Web3Plug (morica/acc)",
        time: "🇺🇸 · 2plugrel · 2h",
      },
    },
    {
      title:
        "Arbitrum DAO's 7,500 ETH Allocation Faces Mixed Reactions Over Non-Native Project",
      description:
        "The Arbitrum DAO plans to allocate 7,500 ETH through the Growth Management Committee to generate low-risk yield and support ecosystem growth, with specific allocations to Lido, Aave, and Fluid, but faces mixed community reactions due to concerns about the timing of the proposal and the choice of non-native projects.",
      status: "Approved",
      moderationNotes: {
        moderator: "jpollock_",
        taggedUsers: [
          "@karmaticacid",
          "@ilhagirl",
          "@yegorgolovnia",
          "@PublicNouns",
        ],
      },
      layout: "default",
      userInfo: {
        profileImage: "/web3-plug.png",
        username: "Web3Plug (morica/acc)",
        time: "🇺🇸 · 2plugrel · 2h",
      },
    },
    {
      title:
        "Arbitrum DAO's 7,500 ETH Allocation Faces Mixed Reactions Over Non-Native Project",
      description:
        "The Arbitrum DAO plans to allocate 7,500 ETH through the Growth Management Committee to generate low-risk yield and support ecosystem growth.",
      status: "Approved",
      moderationNotes: {
        moderator: "jpollock_",
        taggedUsers: [
          "@karmaticacid",
          "@ilhagirl",
          "@yegorgolovnia",
          "@PublicNouns",
        ],
      },
      layout: "default",
      userInfo: {
        profileImage: "/web3-plug.png",
        username: "Web3Plug (morica/acc)",
        time: "🇺🇸 · 2plugrel · 2h",
      },
    },
    {
      title:
        "Arbitrum DAO's 7,500 ETH Allocation Faces Mixed Reactions Over Non-Native Projects",
      description:
        "The Arbitrum DAO plans to allocate 7,500 ETH through the Growth Management Committee to generate low-risk yield and support ecosystem growth, with specific allocations to Lido, Aave, and Fluid, but faces mixed community reactions due to concerns about the timing of the proposal and the choice of non-native projects. The proposal will be voted on February 27, 2025, and if rejected, the GMC will consider community feedback for alternative options.",
      status: "Approved",
      moderationNotes: {
        moderator: "jpollock_",
        taggedUsers: [
          "@karmaticacid",
          "@ilhagirl",
          "@yegorgolovnia",
          "@PublicNouns",
        ],
      },
      layout: "default",
      userInfo: {
        profileImage: "/web3-plug.png",
        username: "Web3Plug (morica/acc)",
        time: "🇺🇸 · 2plugrel · 2h",
      },
    },
    {
      title: "Arbitrum DAO's 7,500 ETH Allocation",
      status: "Approved",
      moderationNotes: {
        moderator: "jpollock_",
        taggedUsers: [
          "@karmaticacid",
          "@ilhagirl",
          "@yegorgolovnia",
          "@PublicNouns",
        ],
      },
      layout: "profile-stacked",
      userInfo: {
        profileImage: "/web3-plug.png",
        username: "Web3Plug (morica/acc)",
        time: "🇺🇸 · 2plugrel · 2h",
      },
    },
    {
      title:
        "Arbitrum DAO's 7,500 ETH Allocation Faces Mixed Reactions Over Non-Native Projects",
      description:
        "The Arbitrum DAO plans to allocate 7,500 ETH through the Growth Management Committee to generate low-risk yield and support ecosystem growth, with specific allocations to Lido, Aave, and Fluid, but faces mixed community reactions due to concerns about the timing of the proposal and the choice of non-native projects.",
      status: "Approved",
      moderationNotes: {
        moderator: "jpollock_",
        taggedUsers: [
          "@karmaticacid",
          "@ilhagirl",
          "@yegorgolovnia",
          "@PublicNouns",
        ],
      },
      layout: "profile-stacked",
      userInfo: {
        profileImage: "/web3-plug.png",
        username: "Web3Plug (morica/acc)",
        time: "🇺🇸 · 2plugrel · 2h",
      },
    },
  ];

  // Extract grid layout component
  function GridLayout() {
    return (
      <div className="w-[1080px] h-[1178.06px] mt-[10px] ml-[50px] flex flex-col bg-gray-100 shadow-lg rounded-2xl p-6">
        {/* First row with two equal width sections */}
        <div className="flex gap-4 w-full mb-4">
          {/* First container */}
          <div className="w-1/2">
            <SmallContainer {...containers[0]} className="w-full h-full" />
          </div>

          {/* Container 1 and 2 stacked in a column */}
          <div className="w-1/2 flex flex-col gap-4">
            <SmallContainer {...containers[1]} className="w-full h-full" />
            <SmallContainer {...containers[2]} className="w-full h-full" />
          </div>
        </div>

        {/* Second row with container 3 slightly larger */}
        <div className="flex gap-4 w-full">
          <div className="w-2/5">
            <SmallContainer {...containers[3]} className="w-full h-full" />
          </div>
          <div className="flex-1">
            <SmallContainer {...containers[4]} className="w-full h-full" />
          </div>
          <div className="flex-1">
            <SmallContainer {...containers[5]} className="w-full h-full" />
          </div>
        </div>
      </div>
    );
  }

  return <GridLayout />;
}

export default App;
