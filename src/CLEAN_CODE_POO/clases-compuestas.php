<?php

enum Gender: int
{
    case MALE = 1;
    case FEMALE = 2;
    case OTHER = 3;

    static public function getName($value): string
    {
        return match ($value) {
            self::MALE => 'Male',
            self::FEMALE => 'Female',
            self::OTHER => 'Other',
            default => 'Gender not allowed'
        };
    }
}

class Person
{
    public function __construct(
        public string $name,
        public Gender $gender,
        public string $birthday
    ) {
        $this->name = $name;
        $this->gender = $gender;
        $this->birthday = $birthday;
    }
}

interface UserInterface
{
    public function checkCredentials(): bool;
}

class User implements UserInterface
{
    public $lastAccess;

    public function __construct(
        public string $email,
        public string $role,
    ) {
        $this->email = $email;
        $this->role = $role;
        $this->lastAccess = date('Y-m-d');
    }

    public function checkCredentials(): bool
    {
        return true;
    }
}

class SettingsProps
{
    public function __construct(
        public string $workingDirectory,
        public string $lastOpenFolder,
    ) {

        $this->workingDirectory = $workingDirectory;
        $this->lastOpenFolder = $lastOpenFolder;
    }
}

class UserSettings
{
    public Person $person;
    public User $user;
    public SettingsProps $settingsProps;

    public function __construct(
        string $workingDirectory,
        string $lastOpenFolder,
        string $email,
        string $role,
        string $lastAccess,
        string $name,
        Gender $gender,
        string $birthday
    )
    {
        $this->person = new Person($name, $gender, $birthday);
        $this->user = new User($email, $role, $lastAccess);
        $this->settingsProps = new SettingsProps($workingDirectory, $lastOpenFolder);
    }
}

$now = date('Y-m-d');

$userSettings = new UserSettings(
    '/usr/miguel',
    '/home',
    'miguel@mateo.com',
    'Admin',
    $now,
    'Miguel Mateo',
    Gender::MALE,
    '1990-10-12'
);

extract(get_object_vars($userSettings));

// echo json_encode(
//     [
//         $settingsProps->workingDirectory,
//         $settingsProps->lastOpenFolder,
//         $person->name,
//         "gender" => Gender::getName($person->gender),
//         $person->birthday,
//         $user->email,
//         $user->role,
//         $user->lastAccess
//     ]
// ) . "\n";