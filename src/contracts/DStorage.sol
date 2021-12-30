pragma solidity ^0.5.0;

contract DStorage {
  string public name = "DStorage";
  // Name
  // Number of files
  // Mapping fileId=>Struct
  
  uint public fileCount = 0; 
  mapping(uint => File) public files;

  // Struct
  struct File{
    uint fileID;
    string fileHash;
    uint fileSize;
    string fileType;
    string fileName;
    string fileDescription;
    uint uploadTime;
    address payable uploader;
  }

  // Event
  event FileUploaded(
    uint fileID,
    string fileHash,
    uint fileSize,
    string fileType,
    string fileName,
    string fileDescription,
    uint uploadTime,
    address payable uploader
  );

  constructor() public {
  }

  // Upload File function
  function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDescription) public {
       // Make sure the file hash exists
    require(bytes(_fileHash).length > 0);
    // Make sure file type exists
    require(bytes(_fileType).length > 0);
    // Make sure file description exists
    require(bytes(_fileDescription).length > 0);
    // Make sure file fileName exists
    require(bytes(_fileName).length > 0);
    // Make sure uploader address exists
    require(msg.sender!=address(0));
    // Make sure file size is more than 0
    require(_fileSize>0);

    fileCount++;

    files[fileCount] =File(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);

    emit FileUploaded(fileCount, _fileHash, _fileSize, _fileType, _fileName, _fileDescription, now, msg.sender);
    
  }


}