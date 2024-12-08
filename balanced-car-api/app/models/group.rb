class Group < ApplicationRecord
  belongs_to :car, optional: true
  belongs_to :driver, optional: true
  belongs_to :user
end
