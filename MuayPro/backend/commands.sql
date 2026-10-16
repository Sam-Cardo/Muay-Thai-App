-- SQLite
CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255) UNIQUE NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `role` varchar(255) NOT NULL COMMENT 'admin, coach, fighter',
  `created_at` timestamp
);

CREATE TABLE `gyms` (
  `id` integer PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `logo_url` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `gym_memberships` (
  `id` integer PRIMARY KEY,
  `gym_id` integer NOT NULL,
  `user_id` integer NOT NULL,
  `role` varchar(255) NOT NULL COMMENT 'owner, coach, fighter',
  `status` varchar(255) NOT NULL COMMENT 'active, inactive',
  `joined_at` timestamp
);

CREATE TABLE `fighter_profiles` (
  `id` integer PRIMARY KEY,
  `user_id` integer UNIQUE NOT NULL,
  `nickname` varchar(255),
  `date_of_birth` date,
  `height_cm` decimal,
  `weight_class` varchar(255),
  `stance` varchar(255),
  `fight_wins` integer DEFAULT 0,
  `fight_losses` integer DEFAULT 0,
  `fight_draws` integer DEFAULT 0,
  `status` varchar(255) COMMENT 'active, injured, inactive',
  `emergency_contact_name` varchar(255),
  `emergency_contact_phone` varchar(255)
);

CREATE TABLE `training_sessions` (
  `id` integer PRIMARY KEY,
  `gym_id` integer NOT NULL,
  `coach_id` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `session_type` varchar(255) COMMENT 'pads, sparring, clinch, cardio',
  `starts_at` timestamp NOT NULL,
  `duration_minutes` integer,
  `capacity` integer,
  `status` varchar(255) COMMENT 'scheduled, cancelled, completed',
  `notes` text
);

CREATE TABLE `attendance` (
  `id` integer PRIMARY KEY,
  `training_session_id` integer NOT NULL,
  `fighter_id` integer NOT NULL,
  `status` varchar(255) COMMENT 'present, absent, late',
  `checked_in_at` timestamp
);

CREATE TABLE `fights` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `opponent_name` varchar(255) NOT NULL,
  `event_name` varchar(255),
  `fight_date` date,
  `weight_class` varchar(255),
  `result` varchar(255) COMMENT 'win, loss, draw, upcoming',
  `notes` text
);

CREATE TABLE `progress_entries` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `recorded_by` integer NOT NULL,
  `metric_type` varchar(255) NOT NULL COMMENT 'weight, strength, cardio, fitness',
  `value` decimal NOT NULL,
  `unit` varchar(255) NOT NULL,
  `recorded_at` timestamp NOT NULL,
  `notes` text
);

CREATE TABLE `injuries` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `reported_by` integer NOT NULL,
  `description` text NOT NULL,
  `body_part` varchar(255),
  `severity` varchar(255),
  `status` varchar(255) COMMENT 'reported, recovering, cleared',
  `reported_at` timestamp,
  `cleared_at` timestamp
);

CREATE TABLE `training_plans` (
  `id` integer PRIMARY KEY,
  `coach_id` integer NOT NULL,
  `fighter_id` integer,
  `gym_id` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `goal` text,
  `generated_by_ai` boolean DEFAULT false,
  `plan_content` text,
  `created_at` timestamp,
  `status` varchar(255) COMMENT 'draft, active, completed'
);

CREATE TABLE `coach_feedback` (
  `id` integer PRIMARY KEY,
  `coach_id` integer NOT NULL,
  `fighter_id` integer NOT NULL,
  `training_session_id` integer,
  `fight_id` integer,
  `feedback` text NOT NULL,
  `created_at` timestamp
);

CREATE TABLE `weight_entries` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `weight_kg` decimal NOT NULL,
  `target_weight_kg` decimal,
  `recorded_at` timestamp NOT NULL,
  `notes` text
);

CREATE TABLE `goals` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `created_by` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  `target_value` decimal,
  `target_unit` varchar(255),
  `due_date` date,
  `status` varchar(255) COMMENT 'not_started, in_progress, completed',
  `created_at` timestamp
);

CREATE TABLE `sparring_logs` (
  `id` integer PRIMARY KEY,
  `gym_id` integer NOT NULL,
  `recorded_by` integer NOT NULL,
  `session_date` timestamp NOT NULL,
  `intensity` varchar(255),
  `notes` text
);

CREATE TABLE `sparring_participants` (
  `sparring_log_id` integer NOT NULL,
  `fighter_id` integer NOT NULL
);

CREATE TABLE `video_links` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `added_by` integer NOT NULL,
  `fight_id` integer,
  `title` varchar(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `video_type` varchar(255) COMMENT 'fight, training, technique example',
  `created_at` timestamp
);

CREATE TABLE `announcements` (
  `id` integer PRIMARY KEY,
  `gym_id` integer NOT NULL,
  `created_by` integer NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `published_at` timestamp,
  `expires_at` timestamp
);

CREATE TABLE `workout_sessions` (
  `id` integer PRIMARY KEY,
  `fighter_id` integer NOT NULL,
  `title` varchar(255),
  `started_at` timestamp NOT NULL,
  `ended_at` timestamp,
  `source` varchar(255) COMMENT 'manual, simulated, smartwatch'
);

CREATE TABLE `heart_rate_readings` (
  `id` integer PRIMARY KEY,
  `workout_session_id` integer NOT NULL,
  `recorded_at` timestamp NOT NULL,
  `bpm` integer NOT NULL
);

CREATE UNIQUE INDEX `gym_memberships_index_0` ON `gym_memberships` (`gym_id`, `user_id`);

CREATE UNIQUE INDEX `attendance_index_1` ON `attendance` (`training_session_id`, `fighter_id`);

CREATE UNIQUE INDEX `sparring_participants_index_2` ON `sparring_participants` (`sparring_log_id`, `fighter_id`);

ALTER TABLE `gym_memberships` ADD FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`);

ALTER TABLE `gym_memberships` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `fighter_profiles` (`user_id`);

ALTER TABLE `training_sessions` ADD FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`);

ALTER TABLE `training_sessions` ADD FOREIGN KEY (`coach_id`) REFERENCES `users` (`id`);

ALTER TABLE `attendance` ADD FOREIGN KEY (`training_session_id`) REFERENCES `training_sessions` (`id`);

ALTER TABLE `attendance` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `fights` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `progress_entries` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `progress_entries` ADD FOREIGN KEY (`recorded_by`) REFERENCES `users` (`id`);

ALTER TABLE `injuries` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `injuries` ADD FOREIGN KEY (`reported_by`) REFERENCES `users` (`id`);

ALTER TABLE `training_plans` ADD FOREIGN KEY (`coach_id`) REFERENCES `users` (`id`);

ALTER TABLE `training_plans` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `training_plans` ADD FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`);

ALTER TABLE `coach_feedback` ADD FOREIGN KEY (`coach_id`) REFERENCES `users` (`id`);

ALTER TABLE `coach_feedback` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `coach_feedback` ADD FOREIGN KEY (`training_session_id`) REFERENCES `training_sessions` (`id`);

ALTER TABLE `coach_feedback` ADD FOREIGN KEY (`fight_id`) REFERENCES `fights` (`id`);

ALTER TABLE `weight_entries` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `goals` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `goals` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `sparring_logs` ADD FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`);

ALTER TABLE `sparring_logs` ADD FOREIGN KEY (`recorded_by`) REFERENCES `users` (`id`);

ALTER TABLE `sparring_participants` ADD FOREIGN KEY (`sparring_log_id`) REFERENCES `sparring_logs` (`id`);

ALTER TABLE `sparring_participants` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `video_links` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `video_links` ADD FOREIGN KEY (`added_by`) REFERENCES `users` (`id`);

ALTER TABLE `video_links` ADD FOREIGN KEY (`fight_id`) REFERENCES `fights` (`id`);

ALTER TABLE `announcements` ADD FOREIGN KEY (`gym_id`) REFERENCES `gyms` (`id`);

ALTER TABLE `announcements` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `workout_sessions` ADD FOREIGN KEY (`fighter_id`) REFERENCES `fighter_profiles` (`id`);

ALTER TABLE `heart_rate_readings` ADD FOREIGN KEY (`workout_session_id`) REFERENCES `workout_sessions` (`id`);
